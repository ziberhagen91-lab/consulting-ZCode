import { Injectable, Logger } from '@nestjs/common';
import { FlectraClient, ResPartnerVals } from '@consulting/flectra';
import { LeadCreatedPayload } from '@consulting/shared';
import { FlectraLeadResult, FlectraPort } from './flectra.port';

/**
 * Maps our Lead domain object onto Flectra native models.
 *
 * Lead is represented by its native res.partner record.
 * This adapter is the only place where domain-to-Flectra mapping happens.
 */
@Injectable()
export class RealFlectraAdapter implements FlectraPort {
  readonly mode = 'real' as const;
  private readonly logger = new Logger(RealFlectraAdapter.name);

  constructor(private readonly client: FlectraClient) {}

  async createLeadForContact(lead: LeadCreatedPayload): Promise<FlectraLeadResult> {
    const partner = await this.findOrCreatePartner(lead);

    this.logger.log(
      `Synced native res.partner #${partner.id} for Lead ${lead.leadId}`,
    );

    return {
      flectraLeadId: String(partner.id),
      flectraPartnerId: String(partner.id),
    };
  }

  /**
   * Native Lead mapping:
   * reuse an existing res.partner by email or create a new one.
   */
  private async findOrCreatePartner(
    lead: LeadCreatedPayload,
  ): Promise<{ id: number }> {
    const existing = await this.client.call<Array<{ id: number }>>(
      'res.partner',
      'search_read',
      [
        [['email', '=', lead.email]],
        ['id'],
      ],
      { limit: 1 },
    );

    if (existing.length > 0) {
      this.logger.log(
        `Found existing native res.partner #${existing[0].id} for ${lead.email}`,
      );

      return existing[0];
    }

    const partnerVals: ResPartnerVals = {
      name: lead.company ?? lead.name,
      email: lead.email,
      is_company: Boolean(lead.company),
    };

    const partnerId = await this.client.call<number>(
      'res.partner',
      'create',
      [partnerVals],
    );

    this.logger.log(
      `Created native res.partner #${partnerId} for ${lead.email}`,
    );

    return { id: partnerId };
  }
}
