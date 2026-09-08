# Docker Reverse Proxy Lab

> Status: **Planned**. This is the first container project in the roadmap.

A small web service behind Nginx, packaged and operated with Docker Compose. The focus is networking, health, security, resource limits, and repeatable operations.

## Planned architecture

```text
client -> Nginx reverse proxy -> app-1
                              -> app-2
```

## Scope

- Small Python or Go API with unit tests.
- Multi-stage image, pinned base image, non-root user, read-only filesystem.
- Nginx load balancing and request IDs.
- Compose networks, health checks, dependency conditions, CPU/memory limits.
- Structured logs and Prometheus metrics.
- k6 or Artillery load test.
- Makefile for build, test, up, load-test, logs, and clean.

## CI gates

- Unit tests and lint
- Hadolint
- Trivy image and filesystem scan
- Gitleaks
- Build and publish to GHCR on tags

## Delivery checklist

- [ ] API and tests
- [ ] Hardened Dockerfiles
- [ ] Nginx configuration
- [ ] Compose health and resource controls
- [ ] Load-test report
- [ ] Troubleshooting runbook

## Definition of done

A clean machine can start the stack with one command, traffic is balanced only to healthy containers, CI publishes a scanned image, and the teardown leaves no resources.

## Skills

Docker · Docker Compose · Nginx · Linux networking · GitHub Actions · Trivy · Load testing
