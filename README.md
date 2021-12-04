In the Terminal window:

    npm install
    npm start

You'll see several warnings:

    WARNING in shared module react
    No required version specified and unable to automatically determine one. Unable to find required version for "react" in description file (/home/mpo/icCube/gh/ReportingMF/ic3-reporting/node_modules/@mui/material/Alert/package.json). It need to be in dependencies, devDependencies or peerDependencies.

    WARNING in shared module @mui/material/styles
    No required version specified and unable to automatically determine one. Unable to find required version for "@mui/material" in description file (/home/mpo/icCube/gh/ReportingMF/ic3-reporting/node_modules/@mui/lab/CalendarPicker/package.json). It need to be in dependencies, devDependencies or peerDependencies.

    WARNING in shared module react
    No required version specified and unable to automatically determine one. Unable to find required version for "react" in description file (/home/mpo/icCube/gh/ReportingMF/ic3-reporting/node_modules/@mui/private-theming/ThemeProvider/package.json). It need to be in dependencies, devDependencies or peerDependencies.

Adding for example the following in the faulty `package.json` seems to resolve the warnings:

    "peerDependencies": {
        "@mui/material": "^5.0.0"
    }

_


