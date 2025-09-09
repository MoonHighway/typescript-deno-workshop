# Full Day TypeScript & Deno Workshop

A comprehensive 1-day workshop combining TypeScript fundamentals in the morning with Deno development in the afternoon.

**Duration**: 9:00 AM - 4:00 PM (7 hours total, including 1-hour lunch break)

## Overview

This workshop reuses materials from four existing courses to create a complete TypeScript and Deno learning experience:
- **Morning (TypeScript Focus)**: `intro-to-typescript` (parts 1 & 2) + `applied-typescript` 
- **Afternoon (Deno Focus)**: `deno-2-course` (selected modules)

## Prerequisites

Participants should have:
- Basic JavaScript knowledge
- Node.js >= v18.0.0 installed
- Git installed
- Visual Studio Code (recommended)

## Course Materials Setup

### 1. Clone Required Repositories

```bash
# TypeScript materials
git clone https://github.com/MoonHighway/intro-to-typescript
git clone https://github.com/MoonHighway/applied-typescript

# Deno materials  
git clone https://github.com/MoonHighway/deno-2-course
```

### 2. Install Dependencies

```bash
# For TypeScript modules
cd intro-to-typescript && npm install
cd ../applied-typescript && npm install
```

### 3. Install Deno

```bash
# Install Deno runtime
curl -fsSL https://deno.land/install.sh | sh
# or
brew install deno
```

## Morning Schedule: TypeScript Fundamentals (9:00 AM - 12:00 PM)

### Session 1: Introduction to TypeScript (9:00 - 10:15 AM)
**Materials**: `intro-to-typescript/part-01/`

- **9:00-9:15**: Welcome & Setup Verification
- **9:15-9:45**: A World of Types (`01-a-world-of-types/`)
- **9:45-10:15**: Types in Action (`02-types-in-action/`)

### Break (10:15-10:30 AM)

### Session 2: Advanced TypeScript Concepts (10:30 AM - 12:00 PM)
**Materials**: `intro-to-typescript/part-01/` & `intro-to-typescript/part-02/`

- **10:30-11:00**: Flexible Types (`03-flexible-types/`)
- **11:00-11:30**: Generics (`part-02/04-generics/`)
- **11:30-12:00**: Classes & Hands-on Exercise (`part-02/05-classes/` + `part-01/exercise/`)

## Lunch Break (12:00 - 1:00 PM)

## Afternoon Schedule: Deno Development (1:00 - 4:00 PM)

### Session 3: Deno Fundamentals (1:00 - 2:30 PM)
**Materials**: `deno-2-course/`

- **1:00-1:20**: What is Deno? (`01-what-is-deno/`)
- **1:20-1:40**: What's New in Deno 2.0 (`02-whats-new/`)
- **1:40-2:00**: Development Environment Setup (`03-your-deno-dev-environment/`)
- **2:00-2:15**: Runtime Security (`04-runtime-security-in-deno/`)
- **2:15-2:30**: Break

### Session 4: Deno in Practice (2:30 - 4:00 PM)
**Materials**: `deno-2-course/` (applied modules)

- **2:30-2:50**: Built-in Tooling (`05-built-in-tooling/`)
- **2:50-3:10**: Browser APIs (`06-browser-apis/`)
- **3:10-3:30**: TypeScript & JSX in Deno (`11-typescript-and-jsx-in-deno/`)
- **3:30-4:00**: Build a RESTful API with Hono (`13-restful-api-with-hono/`)

## Learning Objectives

### Morning (TypeScript)
- Understand TypeScript's type system
- Work with primitive and complex types
- Implement interfaces and type aliases
- Use generics effectively
- Apply object-oriented programming with classes
- Debug TypeScript applications

### Afternoon (Deno)
- Understand Deno's runtime and security model
- Use Deno's built-in tooling (formatter, linter, test runner)
- Work with browser APIs in server-side code
- Build TypeScript applications with Deno
- Create RESTful APIs using modern frameworks

## Workshop Flow

### TypeScript Progression
1. **Foundation**: Start with basic type annotations and built-in types
2. **Composition**: Learn to combine types using unions, intersections, and custom types
3. **Advanced**: Master generics and object-oriented patterns
4. **Application**: Apply TypeScript in real-world scenarios

### Deno Progression
1. **Introduction**: Understand Deno's philosophy and differences from Node.js
2. **Environment**: Set up development workflow with Deno's tooling
3. **Integration**: Leverage TypeScript knowledge in Deno applications
4. **Building**: Create practical applications using Deno's ecosystem

## Key Hands-On Activities

### Morning Labs
- Type annotation exercises (`intro-to-typescript/part-01/exercise/`)
- Generic function implementation
- Class-based application design
- Applied TypeScript challenges (`applied-typescript/01-composing-types-part-1/exercise/`)

### Afternoon Labs
- Deno CLI tool creation
- Browser API implementation
- TypeScript compilation in Deno
- RESTful API development with Hono framework

## Additional Resources

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

### Deno
- [Deno Documentation](https://docs.deno.com/)
- [Deno by Example](https://docs.deno.com/examples/)
- [JSR (JavaScript Registry)](https://jsr.io/)
- [Deno Deploy](https://docs.deno.com/deploy/manual)

## Workshop Materials Structure

```
cascadia-source-material/
├── intro-to-typescript/           # Morning foundation
│   ├── part-01/                  # Basic TypeScript concepts
│   │   ├── 01-a-world-of-types/
│   │   ├── 02-types-in-action/
│   │   ├── 03-flexible-types/
│   │   └── exercise/
│   └── part-02/                  # Advanced TypeScript
│       ├── 04-generics/
│       └── 05-classes/
├── applied-typescript/            # Morning application
│   ├── 01-composing-types-part-1/
│   ├── 01-composing-types-part-2/
│   └── 02-improving-type-safety/
└── deno-2-course/                # Afternoon Deno focus
    ├── 01-what-is-deno/
    ├── 02-whats-new/
    ├── 03-your-deno-dev-environment/
    ├── 04-runtime-security-in-deno/
    ├── 05-built-in-tooling/
    ├── 06-browser-apis/
    ├── 11-typescript-and-jsx-in-deno/
    └── 13-restful-api-with-hono/
```

## Instructor Notes

- **Pacing**: Each session includes buffer time for questions and troubleshooting
- **Flexibility**: Advanced Deno modules (14-19) available for extended sessions or follow-up workshops
- **Integration**: Emphasize how TypeScript knowledge transfers directly to Deno development
- **Practical Focus**: Prioritize hands-on coding over theoretical concepts
- **Assessment**: Use exercises and labs to gauge comprehension throughout the day

## Success Metrics

By the end of the workshop, participants will be able to:
1. Write type-safe TypeScript applications
2. Set up and use Deno for TypeScript development
3. Leverage Deno's built-in tooling and security features
4. Build RESTful APIs using modern TypeScript and Deno patterns
5. Understand the relationship between TypeScript and Deno ecosystems