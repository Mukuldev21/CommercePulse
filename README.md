## 📦 CommercePulse — Microservices Testing & Synthetic Monitoring Framework

A complete sample project demonstrating microservices testing, synthetic monitoring, and mock-driven UI/API validation using:

Playwright (TypeScript)

Mokapi.io for microservice mocking

Optional: Prometheus + Grafana (synthetic monitoring)

This project simulates a real e-commerce microservices architecture and shows how QA Automation Engineers can test UI + APIs even without a real backend.

## 🚀 Project Architecture

    CommercePulse mocks these services:

    User Service

    Product Service

    Cart Service

    Order Service

    Payment Service

All microservices are mocked using Mokapi, and Playwright interacts with them through route interception & mocked HTTP calls.


## 📁 Folder Structure


    commercepulse/
    │
    ├── mokapi/   #Mokapi microservices mocks
    │   ├── mokapi.yaml    #Full mock config
    │   └── data/
    │       ├── users.json
    │       ├── products.json
    │       └── orders.json
    │
    ├── playwright/ #Playwright (TypeScript) 
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── playwright.config.ts
    │   ├── src/
    │   │   ├── pages/
    │   │   │   └── login.page.ts
    │   │   └── fixtures/
    │   │       └── mockResponses.ts
    │   └── tests/  
    │       ├── e2e/
    │       │   ├── login.spec.ts
    │       │   └── checkout.spec.ts
    │
    ├── docker-compose.yml# (Optional) Run Mokapi / Prometheus / Grafana
    ├── README.md


## 🧩 Key Features

🔹 1. Mocked Microservices using Mokapi

    Fully local microservices simulation

    Supports:

    Random responses

    Dynamic templating

    Failure scenario testing
    

 🔹 2. Playwright Synthetic Tests

    UI + API integration tests

    API interception and mocking

    Full checkout flow simulation

🔹 3. Optional Monitoring Stack

    Prometheus for synthetic metrics

    Grafana for dashboards

## ⚙️ Setup Instructions

1️⃣ Install Mokapi (CLI)

You can run without Docker.

    npm install -g mokapi

Verify:

    mokapi --version


## ▶️ Start Mock Services

Run Mokapi locally:

    mokapi start --config ./mokapi/mokapi.yaml

This starts mock services on:

    


