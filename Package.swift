// swift-tools-version: 6.0

import PackageDescription

let package = Package(
    name: "Logpipe",
    platforms: [.macOS(.v13)],
    products: [
        .executable(name: "logpipe", targets: ["Logpipe"]),
    ],
    targets: [
        .executableTarget(name: "Logpipe"),
    ]
)
