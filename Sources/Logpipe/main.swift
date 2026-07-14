import Foundation

let launcher = Process()
launcher.executableURL = URL(fileURLWithPath: "/usr/bin/open")
launcher.arguments = ["-n", "-a", "Calculator"]

do {
    try launcher.run()
    launcher.waitUntilExit()
} catch {
    fputs("Unable to launch Calculator: \(error)\n", stderr)
    exit(1)
}

guard launcher.terminationStatus == 0 else {
    fputs("Calculator exited with status \(launcher.terminationStatus).\n", stderr)
    exit(launcher.terminationStatus)
}

print("Logpipe launch completed.")
