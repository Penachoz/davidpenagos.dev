# Secure CI/CD Supply Chain

> Status: **Planned**. The pipeline will be developed in small, auditable stages.

A GitHub Actions delivery pipeline for a containerized service, with short-lived cloud credentials, security gates, provenance, and controlled promotion.

## Pipeline

```text
PR -> lint -> test -> SAST -> build -> SBOM -> image scan
   -> sign -> push to registry -> deploy dev -> verify -> approve prod
```

## Planned controls

- Reusable GitHub Actions workflows.
- OIDC to AWS or Azure; no static cloud keys.
- Multi-stage Docker build running as non-root.
- Trivy, Hadolint, dependency review, CodeQL, and Gitleaks.
- SBOM with Syft and image signing with Cosign.
- GHCR initially; ECR/ACR as optional registries.
- Protected environments and rollback workflow.
- DORA metrics: lead time, deployment frequency, change failure, recovery.

## Delivery checklist

- [ ] Sample API and tests
- [ ] Reusable CI workflow
- [ ] Hardened image and registry publication
- [ ] SBOM, signature, and verification policy
- [ ] OIDC cloud deployment
- [ ] Failed-deployment rollback and runbook

## Definition of done

Every artifact is traceable to a commit, scanned, signed, and promoted without long-lived credentials. A failed deployment is automatically stopped or rolled back.

## Skills

Git · GitHub Actions · Docker · OIDC · DevSecOps · Trivy · Cosign · SBOM · DORA
