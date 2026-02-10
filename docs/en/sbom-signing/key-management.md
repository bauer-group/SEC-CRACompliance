# 2.5 Key Management

## 2.5.1 Key Management

The secure management of cryptographic keys is essential for the integrity of the signing processes.

## 2.5.2 Key Types

| Key | Type | Storage Location | Purpose |
|-----|------|------------------|---------|
| Cosign Private Key | Ed25519 / ECDSA P-256 | GitHub Secrets | Signing of artifacts |
| Cosign Password | Password | GitHub Secrets | Protection of the Private Key |
| Cosign Public Key | Ed25519 / ECDSA P-256 | Repository (`cosign.pub`) | Verification by users |

## 2.5.3 Key Generation

```bash
# Generate new key pair
cosign generate-key-pair

# Result:
# cosign.key  → Private Key (password-protected)
# cosign.pub  → Public Key
```

## 2.5.4 Key Storage

### Private Key

The Private Key is stored **exclusively** in GitHub Secrets:

- **Secret Name:** `COSIGN_PRIVATE_KEY`
- **Access:** GitHub Actions Workflows only
- **Protection:** GitHub Secrets Encryption (Libsodium sealed box)
- **Visibility:** Never in logs, never in code

### Password

- **Secret Name:** `COSIGN_PASSWORD`
- **Access:** Only in combination with `COSIGN_PRIVATE_KEY`

### Public Key

- **Storage Location:** Repository root (`cosign.pub`)
- **Availability:** Public
- **Purpose:** Verification by users and systems

## 2.5.5 Key Rotation

| Trigger | Action | Deadline |
|---------|--------|----------|
| **Annually** | Routine rotation | Every 12 months |
| **Suspected compromise** | Immediate rotation | Without delay |
| **Personnel change** | Review and rotation if necessary | Within 7 days |
| **Security incident** | Rotation as part of Incident Response | Per Playbook |

### Rotation Process

```
1. Generate new key pair
   └── cosign generate-key-pair

2. Update GitHub Secrets
   ├── COSIGN_PRIVATE_KEY → New Private Key
   └── COSIGN_PASSWORD → New Password

3. Update Public Key in the repository
   └── cosign.pub → New Public Key

4. Archive old Public Key
   └── keys/cosign-<date>.pub.archived

5. Update documentation
   ├── Rotation date
   ├── Key Fingerprint
   └── Reason for rotation

6. Verification
   └── Perform test signing and verification
```

## 2.5.6 Emergency Procedure in Case of Key Compromise

1. **Immediately:** Rotate GitHub Secrets (new key pair)
2. **Within 1h:** Identify all releases signed since the compromise
3. **Within 4h:** Re-sign affected releases with the new key
4. **Within 24h:** Notify users of the key change
5. **Documentation:** Document the incident in the Incident Report

## 2.5.7 Access Permissions

| Role | Private Key | Public Key | Key Rotation |
|------|:-----------:|:----------:|:------------:|
| Security Lead | Management (GitHub Secrets) | Read | Execution |
| DevOps Lead | No direct access (only via Workflow) | Read | Support |
| Development Team | No access | Read | No access |
| GitHub Actions | Read (Runtime) | Read | No access |
