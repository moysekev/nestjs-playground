import { Interaction } from "./model/Interaction";

export class InteractionsRepository {

    private readonly interactions: Interaction[] = [];

    public add(interaction: Interaction) {
        this.interactions.push(interaction);
    }

    public findAll(): Interaction[] {
        return this.interactions;
    }
}