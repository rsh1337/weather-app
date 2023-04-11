import Sidebar from '@/components/Sidebar';

export default function Layout({ children }) {
	return (
		<div className="bg-[#ABC4FF] min-h-[100vh] p-4">
			<div
				className={
					'flex h-[95vh] flex-row gap-5 backdrop-opacity-5 bg-[#E2EAFC]/30 p-4 rounded-2xl'
				}
			>
				<Sidebar />
				<div className={'my-3 lg:basis-2/3 overflow-auto scrollbar-none'}>{children}</div>
			</div>
		</div>
	);
}
