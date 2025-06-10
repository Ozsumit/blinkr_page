import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Eye,
  Clock,
  Bell,
  Shield,
  Download,
  Menu,
  Github,
  Star,
  GitFork,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Eye className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Blinkr</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#open-source"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Open Source
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="default"
              className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700"
            >
              <Link href="#download">
                <Github className="mr-2 h-4 w-4" />
                Get Source
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-gray-300 hover:text-white"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center  px-3 py-1 text-sm">
                    <span className="text-blue-400">Open Source</span>
                    <div className="mx-2 h-4 w-px bg-gray-600"></div>
                    <span className="text-gray-300">Flutter App</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Protect Your Eyes
                    <span className="block text-blue-400">While You Code</span>
                  </h1>
                  <p className="text-gray-400 text-lg md:text-xl max-w-[600px]">
                    Blinkr is an open-source Flutter app that gently reminds you
                    to blink with subtle overlay notifications, helping prevent
                    digital eye strain during long coding sessions.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Link
                      href="https://github.com/Ozsumit/Blinkr/releases/download/Alpha/app-release.apk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download APK
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Link
                      href="https://github.com/Ozsumit/Blinkr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Source
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>Star on GitHub</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <GitFork className="h-4 w-4 text-blue-400" />
                    <span>Fork & Contribute</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
                  <div className="relative w-[280px] h-[560px] md:w-[320px] md:h-[640px] bg-gray-800 rounded-[36px] border-[8px] border-gray-700 overflow-hidden shadow-2xl">
                    <div className="absolute top-0 w-1/2 h-[24px] left-1/4 bg-gray-800 rounded-b-xl"></div>
                    <div className="h-full w-full bg-gray-100 flex items-center justify-center p-4">
                      {/* App interface mockup */}
                      <div className="relative w-full h-full bg-white flex flex-col items-center justify-start pt-16 px-6">
                        {/* Eye icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="54"
                          viewBox="0 0 54 54"
                          width="54"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        </svg>

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          Blink Reminder
                        </h2>
                        <p className="text-gray-600 text-center mb-8 text-sm">
                          Protect your eyes with regular blink reminders
                        </p>

                        {/* Permission status */}
                        <div className="bg-green-100 border border-green-200 rounded-lg px-4 py-2 mb-8 flex items-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full mr-2 flex items-center justify-center">
                            <div className="w-2 h-1 bg-white rounded-full"></div>
                          </div>
                          <span className="text-green-700 text-sm">
                            Overlay permission granted
                          </span>
                        </div>

                        {/* Settings card */}
                        <div className="bg-gray-50 rounded-lg p-4 w-full mb-6">
                          <h3 className="text-gray-900 font-semibold mb-4">
                            Reminder Interval
                          </h3>

                          {/* Interval buttons */}
                          <div className="grid grid-cols-3 gap-2 mb-4">
                            <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs">
                              10s
                            </button>
                            <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs">
                              20s
                            </button>
                            <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs">
                              30s
                            </button>
                            <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs">
                              1m
                            </button>
                            <button className="bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-xs">
                              5m
                            </button>
                            <button className="bg-blue-500 text-white py-2 px-3 rounded-lg text-xs font-medium">
                              10m
                            </button>
                          </div>

                          {/* Custom interval */}
                          <div className="flex items-center gap-2 mb-3">
                            <input
                              className="flex-1 bg-white border border-gray-300 rounded px-3 py-2 text-xs"
                              placeholder="Custom interval (seconds)"
                            />
                            <button className="bg-gray-200 text-gray-700 px-3 py-2 rounded text-xs">
                              Set
                            </button>
                          </div>

                          <p className="text-blue-500 text-xs mb-4">
                            Current: 10m
                          </p>

                          {/* Overlay duration */}
                          <div className="flex items-center justify-between">
                            <span className="text-gray-900 text-sm">
                              Overlay Duration
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-700 text-sm">
                                3 sec
                              </span>
                              <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                                <div className="w-2 h-1 bg-white"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3 w-full mb-4">
                          <button className="flex-1 bg-green-500 text-white py-3 rounded-full font-medium flex items-center justify-center gap-2">
                            <div className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent"></div>
                            Start
                          </button>
                          <button className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-full font-medium flex items-center justify-center gap-2">
                            <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
                            Stop
                          </button>
                        </div>

                        {/* Test reminder */}
                        <button className="text-blue-500 text-sm underline">
                          Test Reminder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-block rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-400">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built for Developers
              </h2>
              <p className="max-w-[800px] mx-auto text-gray-400 text-lg">
                Designed with programmers in mind, Blinkr offers non-intrusive
                reminders that won't break your flow.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <div className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-8 hover:bg-gray-800/80 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
                <div className="relative">
                  <div className="rounded-full bg-blue-500/10 p-3 w-fit mb-4">
                    <Clock className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Smart Intervals</h3>
                  <p className="text-gray-400">
                    Customizable reminder intervals that adapt to your coding
                    sessions and screen time patterns.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-8 hover:bg-gray-800/80 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
                <div className="relative">
                  <div className="rounded-full bg-purple-500/10 p-3 w-fit mb-4">
                    <Bell className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    Overlay Notifications
                  </h3>
                  <p className="text-gray-400">
                    Subtle overlay reminders that appear on top of any app
                    without disrupting your workflow.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800/50 p-8 hover:bg-gray-800/80 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
                <div className="relative">
                  <div className="rounded-full bg-green-500/10 p-3 w-fit mb-4">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Eye Health Focus</h3>
                  <p className="text-gray-400">
                    Scientifically-backed reminder frequency to prevent Computer
                    Vision Syndrome and eye strain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-block rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-400">
                Process
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple Setup, Powerful Protection
              </h2>
              <p className="max-w-[800px] mx-auto text-gray-400 text-lg">
                Get started with Blinkr in minutes and protect your eyes during
                those long coding marathons.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  1
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold">Download & Install</h3>
                <p className="text-gray-400 max-w-sm mx-auto">
                  Download the APK from GitHub releases or build from source.
                  Grant overlay permissions for notifications.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  2
                  <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold">Configure Settings</h3>
                <p className="text-gray-400 max-w-sm mx-auto">
                  Set your preferred reminder intervals and customize the
                  notification style to match your workflow.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-xl font-bold">
                  3
                  <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl"></div>
                </div>
                <h3 className="text-xl font-bold">Code Safely</h3>
                <p className="text-gray-400 max-w-sm mx-auto">
                  Continue coding while Blinkr runs in the background, providing
                  gentle reminders to protect your vision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section id="open-source" className="py-16 md:py-24 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-1 text-sm text-green-400">
                  Open Source
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Built by Developers, for Developers
                </h2>
                <p className="text-gray-400 text-lg">
                  Blinkr is completely open source and built with Flutter.
                  Contribute to the project, report issues, or fork it to create
                  your own version. The code is clean, well-documented, and
                  ready for contributions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Link
                      href="https://github.com/Ozsumit/Blinkr"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Repository
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                  >
                    <Link
                      href="https://github.com/Ozsumit/Blinkr/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Report Issues
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Github className="mr-2 h-5 w-5 text-gray-400" />
                    Repository Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-gray-700/50">
                      <div className="text-2xl font-bold text-blue-400">
                        Flutter
                      </div>
                      <div className="text-sm text-gray-400">Framework</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-700/50">
                      <div className="text-2xl font-bold text-green-400">
                        MIT
                      </div>
                      <div className="text-sm text-gray-400">License</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6">
                  <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                      Flutter
                    </span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm">
                      Dart
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                      Android
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                      Overlay API
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-400">
                  Download
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get Blinkr Today
                </h2>
                <p className="max-w-[800px] mx-auto text-gray-400 text-lg">
                  Download the latest release or build from source. Available
                  for Android devices.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link
                    href="https://github.com/Ozsumit/Blinkr/releases/download/Alpha/app-release.apk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Latest APK
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Link
                    href="https://github.com/Ozsumit/Blinkr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Build from Source
                  </Link>
                </Button>
              </div>
              <div className="text-sm text-gray-500 max-w-md mx-auto">
                Requires Android 6.0+ and overlay permissions for notifications
                to work properly.
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gray-800/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm text-blue-400">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Questions or Feedback?
                </h2>
                <p className="text-gray-400 text-lg">
                  Found a bug? Have a feature request? Want to contribute? Reach
                  out through GitHub or email.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Link
                    href="https://github.com/Ozsumit/Blinkr/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Report an Issue
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                >
                  <Link
                    href="https://github.com/Ozsumit/Blinkr/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Discussion
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-900">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Eye className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Blinkr</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link
                href="https://github.com/Ozsumit/Blinkr"
                className="hover:text-blue-400 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://github.com/Ozsumit/Blinkr/releases"
                className="hover:text-blue-400 transition-colors"
              >
                Releases
              </Link>
              <Link
                href="https://github.com/Ozsumit/Blinkr/blob/main/LICENSE"
                className="hover:text-blue-400 transition-colors"
              >
                MIT License
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 Blinkr. Open source project.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
