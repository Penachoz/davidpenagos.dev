# Consul + Vault Service Platform

> Status: **Planned**. Local lab first; cloud integration is optional.

A service networking and secrets-management lab using HashiCorp Consul and Vault. It demonstrates service discovery, health-based routing, short-lived credentials, encryption, and failure recovery.

## Planned architecture

```text
service-a -> Consul service mesh -> service-b
     |                                |
     `---- Vault dynamic secrets -----'
```

## Scope

- Consul servers and clients with service registration.
- DNS/HTTP discovery and health checks.
- Consul service mesh with mTLS intentions.
- Vault policies, AppRole or Kubernetes auth, and dynamic database credentials.
- Consul KV only for non-secret configuration.
- Optional Nomad deployment to compare with Kubernetes.
- Prometheus telemetry and audit logs.

## Failure scenarios

- Unhealthy service instance removed from discovery.
- Vault sealed or unavailable.
- Expired credential and automatic renewal.
- Denied service-to-service intention.
- Loss and recovery of a Consul server.

## Delivery checklist

- [ ] Docker Compose or Vagrant local environment
- [ ] TLS and ACL bootstrap
- [ ] Two demo services
- [ ] Dynamic database secret
- [ ] Backup/restore and rotation runbooks
- [ ] Threat model and production limitations

## Definition of done

Services discover each other without fixed addresses, communicate through explicit policy, and consume short-lived credentials. Recovery is demonstrated without storing root tokens.

## Skills

Consul · Vault · Service discovery · Service mesh · mTLS · PKI · Secrets management · Nomad
