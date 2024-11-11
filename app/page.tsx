import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <h1 className='bricolage_grotesque' style={{ margin: '5px' }}>Hello, there!</h1>
      <h1 className='bricolage_grotesque' style={{ margin: '5px' }}>Welcome to Bob Lending Protocol</h1>
      <div style={{ marginTop: '20px' }}>
        <ConnectButton />
      </div>
    </div>
  );
}