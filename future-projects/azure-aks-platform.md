# Azure AKS Platform

> Status: **Planned**. This README defines the work before resources are created.

A secure Azure Kubernetes platform provisioned with Terraform, delivered through GitHub Actions, and operated with Azure-native identity and observability.

## Planned scope

- Hub/spoke-ready virtual network and private AKS cluster.
- Microsoft Entra workload identity; no static service principal secret.
- Azure Container Registry, Key Vault, Managed Identities, and private DNS.
- Terraform modules plus optional Bicep comparison.
- Nginx or Application Gateway ingress and cert-manager.
- Azure Monitor, Log Analytics, Container Insights, alerts, and budget.
- Dev and production overlays using Kustomize or Helm.

## Security baseline

- Azure RBAC and least privilege.
- Workload identity for pods.
- Secrets from Key Vault via External Secrets or CSI.
- Network policies, Pod Security Standards, image scanning, and policy checks.

## Delivery checklist

- [ ] Terraform bootstrap and remote state
- [ ] VNet, ACR, Key Vault, and AKS modules
- [ ] GitHub OIDC federation
- [ ] Sample workload with probes and autoscaling
- [ ] Dashboards, alerts, and runbooks
- [ ] Cost estimate and complete destroy path

## Definition of done

A pull request produces a validated plan; an approved workflow creates the platform; the sample service deploys without stored Azure credentials; monitoring detects a deliberate failure.

## Skills

Azure · AKS · Terraform · Entra ID · ACR · Key Vault · Azure Monitor · GitHub Actions

## Cost warning

AKS can incur charges. Use short-lived test windows, budgets, and a verified teardown checklist.
