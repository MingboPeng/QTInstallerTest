/****************************************************************************
**
** Copyright (C) 2017 The Qt Company Ltd.
** Contact: https://www.qt.io/licensing/
**
** This file is part of the FOO module of the Qt Toolkit.
**
** $QT_BEGIN_LICENSE:GPL-EXCEPT$
** Commercial License Usage
** Licensees holding valid commercial Qt licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and The Qt Company. For licensing terms
** and conditions see https://www.qt.io/terms-conditions. For further
** information use the contact form at https://www.qt.io/contact-us.
**
** GNU General Public License Usage
** Alternatively, this file may be used under the terms of the GNU
** General Public License version 3 as published by the Free Software
** Foundation with exceptions as appearing in the file LICENSE.GPL3-EXCEPT
** included in the packaging of this file. Please review the following
** information to ensure the GNU General Public License requirements will
** be met: https://www.gnu.org/licenses/gpl-3.0.html.
**
** $QT_END_LICENSE$
**
****************************************************************************/

function Component()
{
    pipInstall();
    // // constructor
    // component.loaded.connect(this, Component.prototype.loaded);
    // if (!installer.addWizardPage(component, "Page", QInstaller.TargetDirectory))
    //     console.log("Could not add the dynamic page.");
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

Component.prototype.isDefault = function()
{
    // select the component by default
    return true;
}

Component.prototype.createOperations = function()
{
    try {
        // call the base create operations function
        component.createOperations();
    } catch (e) {
        console.log(e);
    }
}

Component.prototype.loaded = function ()
{
    var page = gui.pageByObjectName("DynamicPage");
    if (page != null) {
        console.log("Connecting the dynamic page entered signal.");
        page.entered.connect(Component.prototype.dynamicPageEntered);
    }
}

Component.prototype.dynamicPageEntered = function ()
{
    var pageWidget = gui.pageWidgetByObjectName("DynamicPage");
    if (pageWidget != null) {
        console.log("Setting the widgets label text.")
        //system type
        var info = "OS: " + systemInfo.prettyProductName;
        //get user dir
        info += "\n\r";
        info += "HomeDir: " + installer.value("HomeDir")
        //check python path
        var paths = installer.environmentVariable("Path").split(";");
        var pythonPath = "";
        paths.forEach(p => {
            if(p.includes("Python") && !p.includes("Scripts")){
                pythonPath += p;
            }
        });

        info += "\n\r";
        info += pythonPath;

       
        info += "\n\r";
        info += res;
        pageWidget.m_pageLabel.text = info;

        
       
        //QMessageBox.information("quit.question", "Installer", res,QMessageBox.Yes | QMessageBox.No);


    }
}
