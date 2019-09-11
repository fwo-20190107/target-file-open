import * as vscode from 'vscode';

export function activate({ subscriptions }: vscode.ExtensionContext) {
	const cmd = 'extension.tfo';

	vscode.commands.registerCommand(cmd, () => {
		let configuration: vscode.WorkspaceConfiguration = vscode.workspace.getConfiguration('tfo');
		if (configuration.path.length > 0) {
			vscode.workspace.openTextDocument(configuration.path).then(doc => {
				vscode.window.showTextDocument(doc);
			});
		}
	});
}
