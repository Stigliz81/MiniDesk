# MiniDesk 1.0 – Open-source notices / Open-Source-Hinweise

No commercial Qt licence is assumed. Independent MiniDesk application code is proprietary freeware for private and professional use under the adopted [MiniDesk terms](freeware.html). Its source remains private. Third-party rights take precedence.

| Shipped component | Version and licence | Included fulfilment / notice |
|---|---|---|
| CPython / standard library | 3.14.8; PSF and historical licences | Python-LICENSE.txt, original copyrights and dependency notices |
| Qt Core, Gui, Widgets, Network, SVG, WebSockets; Windows/style/image/TLS plugins | 6.12.0; LGPLv3 route, module-specific permissive third-party terms | LGPL-3.0.txt, GPL-3.0.txt, Qt wheel notices, exact-source third-party notice superset and sources companion |
| PySide6-Essentials / Shiboken6 | 6.12.0; LGPLv3 selected from upstream alternatives | Original upstream notices, complete matching pyside-setup sources, replacement instructions |
| psutil | 7.2.0; BSD-3-Clause | Original LICENSE with copyright, conditions and disclaimer |
| PyInstaller bootloader | 6.22.3; GPL with bootloader exception | Original COPYING with exception; unmodified upstream bootloader |
| OpenSSL | 3.5.9; Apache-2.0 | Versioned original LICENSE, AUTHORS and Apache text |
| Expat / Unicode | 2.8.5 / 16.0.0; upstream permissive terms | Original Expat and Python/Qt Unicode notices |
| zlib-ng, bzip2, libffi, XZ, Zstandard | CPython release manifest: 2.2.4, 1.0.8, 3.4.4, 5.2.5, 1.5.7 | Original versioned licence/copyright files and CPython manifest; not invented independent PE versions |
| Qt embedded image/font/compression libraries | Exact-release source attribution index | Full conservative notice set under upstream-source-notices, indexed by SOURCE_THIRD_PARTY_INDEX.json; optional entries do not assert compiled features |
| Own C# helpers | Existing MiniDesk sources; Windows/.NET Framework APIs | No copied framework/system assemblies; own-code terms remain the publisher's decision |

## LGPL sources and replacement / Quellen und Austausch

Qt/PySide6/Shiboken are separate shared libraries in `_internal`, with no application hash/signature lock. The chosen mechanism is LGPLv3 §4(d)(1): use ABI-compatible modified shared libraries in the same paths. Library modification and reverse engineering to debug such modifications are expressly permitted; later project terms must preserve these rights. This mechanism does not by itself require disclosure of independent MiniDesk application code. No claim of a tested custom rebuilt DLL or byte-reproducible build is made.

The exact five official 6.12.0 source archives (qtbase, qtsvg, qtimageformats, qtwebsockets, pyside-setup including Shiboken) are locally available, verified against official SHA-256 files, and include upstream build instructions/scripts. A separate free `MiniDesk_1.0_LGPL_Sources.zip` is publicly available free of charge alongside the binary ZIP at [Release v1.0](https://github.com/stigliz81/MiniDesk/releases/tag/v1.0). No fictional multi-year written source offer is made.

Detailed bilingual instructions are included as `licenses/SOURCE_ACCESS_DE_EN.md` in the program ZIP and in the sources companion. Exact source manifest and wheel provenance accompany the package. Source-derived notices cover all identified candidate embedded components, even where precise optional build features cannot be inferred from a stripped binary; this avoids dropping notices solely because a Python import is absent.

## Microsoft app-local runtime / App-lokale Laufzeit

The five required Microsoft Visual C++ v14 x64 DLLs (14.51.36247.0) are included app-locally. This candidate is intended to run without a separate Redistributable installation; Windows/UCRT, PowerShell, WMI and required .NET Framework system components remain prerequisites. No automatic installation or system-runtime changes. Startup on fresh Windows 10/11 without a separately installed VC runtime still requires practical confirmation. Provenance and distribution basis are included as `licenses/MICROSOFT_DISTRIBUTION_REVIEW.md` in the program ZIP. [Microsoft component terms](licenses/MICROSOFT_RUNTIME_TERMS_DE_EN.md).

## Provenance and retained rights

Every payload PE is listed with hashes/imports in `licenses/BINARY_INVENTORY.csv`; `COMPONENTS.json` records actual package versions. `SOURCES.json` verifies included original licence/reference texts; `SOURCE_THIRD_PARTY_INDEX.json` points to exact source paths. Source/component version provenance is distinguished from a claim about every enabled binary feature.

Plural upstream `LicenseFiles` and separate `CopyrightFile` references are included as well as `LicenseFile` and inline copyrights. JPEG includes its IJG/BSD texts and original copyright list; FreeType uses its FTL option with the retained original FTL notices (not a new GPL licence for MiniDesk). The conservative notice set also contains optional non-Windows/build-tool components without asserting that they are shipped binaries.

Qt PDF/PDFium, Virtual Keyboard, Quick/QML/OpenGL, WebEngine and unused pywin32 chains are excluded. qwindows, required styles, SVG/image formats and TLS/network plugins remain.

Programm und Quellenasset sind gleichzeitig kostenlos veröffentlicht. Die festgelegten Freewarebedingungen und unabhängigen Bibliotheksrechte bleiben erhalten. Beigefügte Texte sind keine allgemeine Rechts- oder Sicherheitszertifizierung. Bereits belegte Bibliotheks-/Lizenztexte und genaue Quellen werden nicht als pauschal fehlend ausgegeben.

Primary guidance: [Qt LGPL](https://doc.qt.io/qt-6/lgpl.html), [Qt for Python](https://doc.qt.io/qtforpython-6/licenses.html), [Qt third-party components](https://doc.qt.io/qt-6/licenses-used-in-qt.html), [Python](https://docs.python.org/3.14/license.html), [PyInstaller exception](https://pyinstaller.org/en/stable/license.html), [OpenSSL](https://openssl-library.org/source/license/index.html).
