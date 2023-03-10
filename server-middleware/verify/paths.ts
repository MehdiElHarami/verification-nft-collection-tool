export function getHodlerFilePath(name: any) {
    return `./server-middleware/hodlers-${name}.json`
}

export function getBuyerPuclicKeyPath(address: any) {
    return `./buyer/buyer-publicKey-${address}.json`
}

export function getConfigFilePath(name: any) {
    return `./config/prod-${name}.json`
}

export function getVoteFilePath(project: any) {
    return `./config/vote-${project}.json`
}

export function getVoteResultsFilePath(project: any, id: any) {
    return `./config/vote-results-${project}-${id}.json`
}

export function getPublicKeyFilePath(address: any) {
    return `./config/publicKey-${address}.json`
}

export function getSalesAuditFilePath(ownerPublicKey: any) {
    return `./sales/auditfile-${ownerPublicKey}.json`
}

export function getSalesFilePath(ownerPublicKey: any) {
    return `./sales/records-${ownerPublicKey}.json`
}

export function getSalesTrackerLockPath() {
    return "sales-tracker-running"
}

export function getSalesTrackerSuccessPath() {
    return "sales-tracker-success"
}

export function getRevalidationSuccessPath() {
    return "revalidation-success"
}