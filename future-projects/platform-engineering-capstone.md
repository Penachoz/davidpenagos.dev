# Platform Engineering Capstone

> Status: **Planned**. Build only after the smaller labs; this repository integrates proven components.

An internal developer platform reference that lets a developer create, deploy, observe, and operate a service through a supported golden path.

## User journey

```text
Developer creates service
  -> template generates repo
  -> CI builds, tests, scans, signs
  -> Terraform provisions dependencies
  -> Argo CD deploys
  -> service receives dashboards, alerts, and runbooks
```

## Planned platform

- Backstage or a small custom service catalog.
- Cookiecutter/Copier service templates.
- AWS as primary cloud; Azure mapping documented.
- Terraform module catalog and pull-request plans.
- Kubernetes, Helm/Kustomize, and Argo CD.
- Vault/External Secrets and OIDC identities.
- OpenTelemetry, Prometheus, Grafana, Loki, and Tempo.
- Kyverno/OPA guardrails, Trivy, Cosign, and SBOM.
- DORA metrics, SLOs, cost ownership, and scorecards.

## Platform principles

- Self-service with guardrails.
- Secure defaults and short-lived identity.
- Git as the auditable control plane.
- Observability included, not optional.
- Documented escape hatches.
- Measure developer experience and operational outcomes.

## Delivery checklist

- [ ] Service template and catalog
- [ ] Reusable Terraform modules
- [ ] Secure CI and GitOps delivery
- [ ] Policy and secrets baseline
- [ ] Observability and SLO baseline
- [ ] Upgrade, incident, backup, and DR runbooks
- [ ] Developer onboarding test with recorded friction

## Definition of done

A second developer can create a service, deploy it through the golden path, find its owner and documentation, observe it, and recover it—without asking for manual infrastructure tickets.

## Skills

Platform Engineering · AWS · Azure · Terraform · Kubernetes · GitOps · Vault · Observability · DevSecOps · FinOps
