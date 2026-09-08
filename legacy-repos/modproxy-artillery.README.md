# Apache load balancer + Artillery

Three Ubuntu VMs provisioned with **Vagrant**: two Apache backends and one `mod_proxy_balancer`. Load tests run with **Artillery**.

University project — Servicios Telemáticos 2025. The useful part for an infrastructure portfolio: reproducible VMs, HTTP load balancing, and measured traffic — not a screenshot of a single `systemctl start`.

## What it does

| VM | Role | Address |
| --- | --- | --- |
| vm1 | Web backend | 192.168.50.10 |
| vm2 | Web backend | 192.168.50.20 |
| vm3 | Apache balancer | 192.168.50.30 |

```bash
git clone https://github.com/Penachoz/modproxy-artillery.git
cd modproxy-artillery
vagrant up
curl http://192.168.50.30/
artillery run tests/load_test.yml -o tests/result.json
```

Responses should alternate between backends.

## Stack

Vagrant · VirtualBox · Ubuntu 22.04 · Apache `mod_proxy_balancer` · Artillery · Bash provisioners

## Honest limits

- Local lab, not production. No TLS, no autoscaling, no IaC beyond Vagrant.
- Next: Docker Compose equivalent, then Terraform.

## License

MIT — educational use.
