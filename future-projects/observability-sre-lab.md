# Observability SRE Lab

> Status: **Planned**. This project starts after the container and Kubernetes labs.

An intentionally fallible service used to learn metrics, logs, traces, SLOs, alerting, and incident response. The purpose is diagnosis and reliability—not collecting screenshots of dashboards.

## Planned stack

- OpenTelemetry SDK and Collector
- Prometheus and Alertmanager
- Grafana dashboards
- Loki for logs and Tempo for traces
- k6 for traffic and failure scenarios

## Reliability model

- Availability and latency SLIs.
- 99.5% availability SLO for the lab.
- Error budget and multi-window burn-rate alerts.
- RED dashboard: rate, errors, duration.
- Infrastructure saturation dashboard.
- Alerts link directly to versioned runbooks.

## Failure scenarios

1. Increased application latency.
2. Dependency timeout.
3. CPU saturation.
4. Memory leak / OOM kill.
5. Bad deployment increasing errors.

## Delivery checklist

- [ ] Instrumented service and collector
- [ ] Reproducible observability stack
- [ ] Dashboards as code
- [ ] SLOs and alert rules
- [ ] Five runbooks
- [ ] Game day and blameless postmortem

## Definition of done

A failure creates an actionable alert before a manual report; traces and logs identify the cause; the runbook supports recovery; the postmortem adds a preventive control.

## Skills

SRE · OpenTelemetry · Prometheus · Grafana · Loki · Tempo · Alertmanager · k6
