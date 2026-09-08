# DDoS incident response (NIST CSF)

Simulated Distributed Denial of Service against a web service. The report follows the **NIST Cybersecurity Framework**: identify, protect, detect, respond, recover.

This is an **operations** artifact: how the service fails under flood, what you log, how you contain, how you come back. It is not a pentest write-up.

## Contents

- `INCIDENT_REPORT.md` — full report
- `report/DDoS_Incident_Report.pdf` — portfolio PDF

## Topics

Network hardening · firewall misconfig · ICMP flood · IDS/IPS · incident response planning · availability

## How to read it as infra/DevOps

Look for: blast radius, detection signals, rollback/recovery, and what you would automate the second time (rate limits, health checks, runbook).
