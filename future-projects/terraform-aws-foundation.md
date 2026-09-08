# Terraform AWS Foundation

> Status: **Planned**. No infrastructure has been deployed yet.

An AWS foundation built as code, with safe identity, networking, remote state, validation, and cost controls. The goal is to show the full lifecycle—not only a successful `terraform apply`.

## Planned scope

- VPC across two Availability Zones.
- Public and private subnets, routing, NAT strategy, and VPC endpoints.
- IAM roles with least privilege; GitHub Actions authenticates through OIDC.
- EC2 or ECS workload behind an Application Load Balancer.
- S3 remote state with native locking and versioning.
- CloudWatch logs, alarms, AWS Budget, and resource tags.
- Reusable Terraform modules and separate `dev` / `prod` environments.

## Repository shape

```text
bootstrap/       # state bucket and GitHub OIDC
modules/         # network, identity, workload, observability
environments/    # dev and prod compositions
docs/            # diagram, ADRs, runbook, cost notes
```

## CI gates

- `terraform fmt`, `validate`, TFLint
- Checkov and Trivy IaC scans
- Infracost estimate on pull requests
- Plan on PR; apply only after environment approval

## Delivery checklist

- [ ] Bootstrap remote state
- [ ] Network and IAM modules
- [ ] Workload and health check
- [ ] OIDC pipeline (no AWS access keys)
- [ ] Cost dashboard and teardown guide
- [ ] Failure scenario and postmortem

## Definition of done

The environment can be planned, deployed, observed, and destroyed through reviewed workflows. No long-lived cloud credentials or undocumented resources.

## Skills

AWS · Terraform · IAM · VPC · EC2/ECS · ALB · S3 · CloudWatch · OIDC · FinOps
