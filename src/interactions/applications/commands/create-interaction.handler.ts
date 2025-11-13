import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateInteractionCommand } from "./create-interaction.command";
import { InteractionsRepository } from "src/interactions/interactions.repository";
import { Interaction } from "src/interactions/model/Interaction";

@CommandHandler(CreateInteractionCommand)
export class CreateInteractionHandler implements ICommandHandler<CreateInteractionCommand> {
    constructor(
        private repository: InteractionsRepository
    ) { }

    async execute(command: CreateInteractionCommand) {
        const { externalId } = command;
        //const hero = this.repository.findOneById(+heroId);
        //hero.killEnemy(dragonId);
        //await this.repository.persist(hero);

        console.log(`Creating interaction for externalId ${externalId}`);

        this.repository.add(new Interaction(
            crypto.randomUUID(),
            externalId,
        ));


        // "ICommandHandler<CreateInteractionCommand>" forces you to return a value that matches the command's return type
        return {
            interactionId: crypto.randomUUID(), // This value will be returned to the caller
        }
    }
}
