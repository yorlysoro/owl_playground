/** @odoo-module */

import { Component } from "@odoo/owl";

export class Todo extends Component {
	onClick(ev){
		this.props.toggleState(this.props.id);
	}

	onRemove(){
		this.props.removeTodo(this.props.id);
	}
}

Todo.template = "owl_playground.Todo";
Todo.props = {
	id: { type: Number },
	description: { type: String },
	done: { type: Boolean },
	toogleState: { type: Function },
	removeTodo: { type: Function },
};
