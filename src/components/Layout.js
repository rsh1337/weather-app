export default function Layout({ children }){
	return(
		<div className="bg-[#ABC4FF] min-h-[100vh] p-4">
			<div className={"flex h-[95vh] flex-col backdrop-opacity-5 bg-[#E2EAFC]/30 p-4 rounded-2xl"}>
				<div>
					<h1>Header</h1>
				</div>
				{children}
				<div className="mt-auto">
					<h1>Footer</h1>
				</div>
			</div>
		</div>
	)
}