import styles from './PrimaryLoading.module.scss'

/**
 * Обычная загрузка, которая используется в приложении
 * @param {number} [padding] количество ПИКСЕЛЕЙ для padding'a 
 */
const PrimaryLoading: React.FC<{ padding?: number }> = props => {
	const { padding } = props
	return (
		<div className={styles.load_block} style={{ padding: padding }}>
			<div className={styles.loader}></div>
		</div>
	)
}
export { PrimaryLoading }
