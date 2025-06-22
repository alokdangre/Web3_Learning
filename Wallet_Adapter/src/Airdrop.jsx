import { useWallet } from '@sola'

export function Airdrop() {
    const wallet = useWallet();
    return (
        <div>
            Airdrop hai !
        </div>
    )
}