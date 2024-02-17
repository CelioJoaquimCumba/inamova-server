import * as os from 'os';

// Get network interfaces
const networkInterfaces = os.networkInterfaces();

// Filter out internal (loopback) addresses and non-IPv4 addresses
const filteredInterfaces = Object.values(networkInterfaces).flat().filter((interfaces: os.NetworkInterfaceInfoIPv4) => {
    return interfaces.family === 'IPv4' && !interfaces.internal;
});

export const getCurrentInterface = (): string => {
    let current = "";
    filteredInterfaces.forEach((interfaces: os.NetworkInterfaceInfoIPv4) => {
        if (interfaces.address.substring(0, 2) === "19") // Assuming you want addresses starting with "19"
            current = interfaces.address;
    });
    return current;
}


