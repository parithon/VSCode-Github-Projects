'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('github.start', () => {
        const panel = vscode.window.createWebviewPanel(
            'github',               // identifies the type of webview. Used internally
            'Github Projects',      // Title of the panel displayed to the user
            vscode.ViewColumn.One,  // Editor column to show the new webiew panel in.
            { enableScripts: true, enableCommandUris: true }                      // Webview options.
        );

        panel.webview.html = getWebViewContent();
    }));
}

function getWebViewContent(): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Github Projects</title>
    </head>
    <body>
        <p>Hello, World!</p>
    </body>
    </html>`;
}