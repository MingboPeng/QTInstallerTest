
function Component()
{
}

Component.prototype.createOperations = function()
{
    // default implementation
    //component.createOperations();
    var widget = gui.currentPageWidget(); // get the current wizard page
    if (widget != null) {
        widget.title = "Installing honeybee-energy[CLI]"; // set the page title
        var res = installer.execute("pip", ["install","-r","requirements.txt","--no-index","--find-links","honeybeepackages"]);
        // widget.MessageLabel.setText(res); // set the welcome text
        if(res[1] == "0")
        {
            var cmd = "pip install -r requirements.txt --no-index --find-links honeybeepackages";
            QMessageBox.information("quit.question", "Installer", "Failed to install honeybee-energy[CLI]\n\r"+cmd, QMessageBox.Ok);
        }
        
    }

}
