import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Hook0Client, Event } from 'hook0-client';

@Injectable()
export class WebhooksService {
  private hook0Client: Hook0Client;

  constructor(private configService: ConfigService) {
    this.hook0Client = new Hook0Client(
      this.configService.get<string>('HOOK0_API_URL') || 'https://app.hook0.com/api/v1/event',
      this.configService.get<string>('HOOK0_APPLICATION_ID') || '',
      this.configService.get<string>('HOOK0_API_KEY') || '',
      true, // Enable debug mode
    );
  }

  async trackEvent(eventType: string, tenant: string, payload: Record<string, any>) {
    try {
      const eventId = await this.hook0Client.sendEvent(
        new Event(eventType, JSON.stringify(payload), 'application/json', {
          //source: 'nestjs-playground',
          tenant: tenant
        }),
      );
      console.log(`Event sent successfully with ID: ${eventId}`);
    } catch (error) {
      console.error('Error sending event:', error);
    }
  }
}
