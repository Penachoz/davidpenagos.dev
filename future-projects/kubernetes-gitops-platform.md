# Kubernetes GitOps Platform

> Status: **Planned**. Start locally with kind before using a managed cluster.

A small internal platform that separates cluster bootstrap, platform add-ons, and application delivery. Git is the source of truth; manual cluster changes are treated as drift.

## Planned architecture

```text
GitHub pull request
  -> CI validation
  -> Argo CD
     -> platform add-ons
     -> dev applications
     -> production applications
```

## Platform components

- kind for local development; EKS or AKS as an optional target.
- Argo CD with app-of-apps or ApplicationSets.
- Helm for reusable packages and Kustomize for environment differences.
- External Secrets, cert-manager, ingress-nginx, and Kyverno.
- Resource quotas, network policies, PDBs, HPA, and Pod Security Standards.

## CI gates

- kubeconform and kube-linter
- Helm lint and template tests
- Trivy configuration/secret scan
- Conftest or Kyverno policy tests

## Delivery checklist

- [ ] One-command local bootstrap
- [ ] Dev and production overlays
- [ ] Automated image update strategy
- [ ] Drift demo and reconciliation evidence
- [ ] Rollback exercise
- [ ] Upgrade and disaster-recovery runbooks

## Definition of done

Changing a manifest through a pull request promotes a release; an unauthorized manual change is detected and reconciled; rollback is demonstrated and documented.

## Skills

Kubernetes · kind · Helm · Kustomize · Argo CD · GitOps · Kyverno · External Secrets
