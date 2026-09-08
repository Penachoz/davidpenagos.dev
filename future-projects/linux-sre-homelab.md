# Linux SRE Homelab

> Status: **Planned**. This repository is a build brief, not a finished project.

A reproducible Linux operations lab for practicing the failures an infrastructure engineer handles: broken services, exhausted resources, network faults, permissions, logs, backups, and recovery.

## What this project must prove

- Provision three Ubuntu VMs with Vagrant and Ansible.
- Configure users, SSH hardening, firewall, NTP, packages, and systemd services.
- Automate routine checks with Bash and Python.
- Reproduce CPU, memory, disk, DNS, port, and permission incidents.
- Collect evidence with `journalctl`, `ss`, `lsof`, `top`, `vmstat`, `iostat`, and `tcpdump`.
- Restore a service from backup and document RTO/RPO.

## Planned architecture

```text
operator
   |
Ansible control node
   |--- web-01 (Nginx)
   |--- app-01 (Python service)
   `--- ops-01 (logs + backups)
```

## Delivery checklist

- [ ] Vagrantfile and idempotent Ansible roles
- [ ] Makefile: `up`, `test`, `break`, `recover`, `destroy`
- [ ] Molecule or Ansible lint in GitHub Actions
- [ ] Six incident scenarios with runbooks
- [ ] Backup and tested restore
- [ ] Architecture decision records

## Definition of done

A new operator can provision the lab, trigger a failure, diagnose it from telemetry, recover the service, and destroy the environment using only the README.

## Skills

Linux · systemd · Bash · Python · Networking · Ansible · Troubleshooting · Backups

## Cost

Local VMs only. No cloud bill.
