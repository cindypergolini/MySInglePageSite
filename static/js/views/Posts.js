import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
            <ol>
            <li >Coffee</li>
            <li>Tea</li>
            <li >Milk</li>
            <a href="/posts/:1" data-link>View recent post 1</a>.
            <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
            width=150" height="70">
          </ol>

      
        `;
    }
}