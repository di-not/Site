import { PrimaryLoading } from '@/shared/components/ui/PrimaryLoading'

export default function LoadingPosts() {
	return (
		<div className='w-full h-[80vh] flex justify-center items-center'>
			<div className='mx-auto my-auto'>
				<PrimaryLoading />
			</div>
		</div>
	)
}
//TODO - сделать тут загрузку скелетонов
