# TuTu Airdrop Demo

A modern Web3 airdrop application built with Next.js 15 and deployed on the Linea network. This project allows users to claim TuTu tokens based on their Linea XP.

## Features

- **Wallet Integration**: Seamless wallet connection using RainbowKit
- **Smart Contract Interaction**: Query claimable amounts and claim tokens directly from the UI  
- **Network Support**: Built specifically for Linea network with automatic network switching
- **Modern UI**: Beautiful, responsive design with dark/light theme support
- **Performance Optimized**: Client-side rendering for Web3 components to prevent hydration issues
- **Mobile Responsive**: Fully responsive design that works on all devices

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **shadcn/ui** - High-quality UI components

### Web3
- **wagmi** - React hooks for Ethereum
- **viem** - TypeScript interface for Ethereum
- **RainbowKit** - Wallet connection UI

### Additional Tools
- **next-themes** - Theme switching
- **Radix UI** - Primitive UI components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- MetaMask or other Web3 wallet

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mev-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

### Connecting Your Wallet

1. Visit the homepage and click "Go to Airdrop Page"
2. Click "Connect Wallet" to connect your Web3 wallet
3. Make sure you're connected to the **Linea network**
4. If on wrong network, click "Switch to Linea" to automatically switch

### Claiming Tokens

1. Once connected to Linea, the app will automatically check your claimable amount
2. If you have claimable TuTu tokens, a "Claim Tokens" button will appear
3. Click to claim and confirm the transaction in your wallet
4. Wait for transaction confirmation

## Project Structure

```
mev-demo/
├── src/
│   ├── app/
│   │   ├── airdrop/           # Airdrop page and components
│   │   │   ├── page.tsx       # Main airdrop page (SSR disabled)
│   │   │   └── AirdropContent.tsx  # Client-side airdrop logic
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx          # Homepage
│   │   ├── providers.tsx     # Web3 and theme providers
│   │   └── globals.css       # Global styles with theme variables
│   ├── components/
│   │   ├── airdrop/
│   │   │   └── ClaimButton.tsx    # Token claiming component
│   │   ├── ui/                    # shadcn/ui components
│   │   │   └── button.tsx
│   │   └── NavBar.tsx            # Navigation component
│   ├── constants/
│   │   └── tutuAirdrop.ts        # Smart contract config
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## Configuration

### Smart Contract

The app interacts with the TuTu token contract on Linea:

- **Contract Address**: `0x81957F4Ac4FAe880B164740D39208A22AfD7A398`
- **Network**: Linea (Chain ID: 59144)
- **Functions**:
  - `getClaimableAmount(address)` - Check claimable tokens
  - `claim(uint256)` - Claim tokens
  - `claimed(address)` - Check claimed amount

### Environment Setup

The app is configured to work with Linea network out of the box. No environment variables required for basic functionality.

## UI Components

This project uses shadcn/ui components with custom styling:

- **Button** - Primary action buttons with hover effects
- **Theme Support** - Automatic dark/light mode switching
- **Responsive Design** - Mobile-first responsive layout
- **Loading States** - Smooth loading indicators
- **Error Handling** - User-friendly error messages

## Common Issues

### Hydration Errors
The app uses dynamic imports with `ssr: false` for Web3 components to prevent React hydration mismatches between server and client.

### Network Switching
If automatic network switching doesn't work, manually switch to Linea network in your wallet:
- Network Name: Linea
- RPC URL: https://rpc.linea.build
- Chain ID: 59144
- Currency Symbol: ETH

### Transaction Failures
- Ensure you have enough ETH for gas fees
- Check that you haven't already claimed your tokens
- Verify you're connected to the correct wallet address

## Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deployment

This app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify** 
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Links

- [Linea Network](https://linea.build/)
- [RainbowKit Documentation](https://rainbowkit.com/)
- [wagmi Documentation](https://wagmi.sh/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## Support

If you encounter any issues or have questions, please:

1. Check the [Common Issues](#common-issues) section
2. Open an issue on GitHub
3. Contact the development team

---

**Made with for the Linea community**
