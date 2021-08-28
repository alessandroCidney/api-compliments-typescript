import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

// Em caso de dúvidas sobre tipos, checar a 
// documentação do TypeScript

// Importando a função Expose
import { Expose } from "class-transformer";

import { v4 as uuid } from "uuid";

@Entity("tags")
class Tag {

	@PrimaryColumn()
	readonly id: string;

	@Column()
	name: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@Expose({name: "name_custom"})
	nameCustom() : string {
		return `#${this.name}`; 
	}

	constructor() {
		if(!this.id) {
			this.id = uuid();
		}
	}
}

export { Tag }