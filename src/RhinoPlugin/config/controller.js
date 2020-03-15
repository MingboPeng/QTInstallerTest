function Controller()
{
}

Controller.prototype.IntroductionPageCallback = function()
{
    var widget = gui.currentPageWidget(); // get the current wizard page
    if (widget != null) {
        widget.title = "New titleddddd."; // set the page title

        var ep ="C:\\EnergyPlusV9-2-0\\EP-Launch.exe";
        pip = "pip.exe install click";
        //var res = installer.execute("pip.exe", ["install","honeybee-energy[cli]","-U"]);
        var res = installer.execute("pip.exe", ["install","-r","requirements.txt","--no-index","--find-links","honeybeePackages"]);
        //var res = installer.execute("notepad", ["aa.txt"]);
        //var res = component.addElevatedOperation("Execute", "{0}", )
        widget.MessageLabel.setText(res); // set the welcome text
    }
}

function pipInstall()
{
    var python = "C:\\Users\\mingo\\AppData\\Local\\Programs\\Python\\Python38-32\\python.exe";
    var arg = "import os; os.mkdir('aa')";
    arg = "install honeybee-energy[cli] -U";
    var ep ="C:\\EnergyPlusV9-2-0\\EP-Launch.exe";
    var pip = "C:\\Users\\mingo\\AppData\\Local\\Programs\\Python\\Python38-32\\Scripts\\pip.exe install click";
    pip = "pip.exe install click";
    //var res  =installer.performOperation("Execute", [pip]);
    //var res = installer.execute(ep, []);
    var res = installer.execute(pip);
    component.addOperation("Execute", pip);
    QMessageBox.information("quit.question", "Installer", res, QMessageBox.Yes | QMessageBox.No);

}