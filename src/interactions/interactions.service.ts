import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { CreateInteractionCommand } from "./applications/commands/create-interaction.command";
import { CreateInteractionDto } from "./create-interaction.dto";

@Injectable()
export class InteractionsService {
  constructor(private commandBus: CommandBus) { }

  async createInteraction(dto: CreateInteractionDto) {
    return this.commandBus.execute(
      new CreateInteractionCommand(dto.externalId)
    );
  }
}