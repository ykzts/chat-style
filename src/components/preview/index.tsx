import classNames from 'classnames'
import { MdBrightness2, MdVisibility, MdWbSunny } from 'react-icons/md'
import { useInvert } from '../../hooks'
import Headline from '../headline'
import PreviewFrame from './frame'
import styles from './index.module.css'
import type { VFC } from 'react'

const Preview: VFC = () => {
  const [invert, handleInvertChange] = useInvert()

  return (
    <section>
      <Headline
        actions={
          <button
            aria-label={invert ? '背景を明るくする' : '背景を暗くする'}
            className="flex focus:outline-none hover:bg-blue-100 h-8 items-center justify-center rounded-full transition-colors w-8"
            onClick={handleInvertChange}
            type="button"
          >
            {invert ? <MdWbSunny /> : <MdBrightness2 />}
          </button>
        }
        icon={<MdVisibility />}
        label="プレビュー"
      />

      <div
        className={classNames('p-1', 'rounded', 'shadow', styles.preview, {
          [styles.previewInvert]: invert
        })}
      >
        <PreviewFrame />
      </div>
    </section>
  )
}

export default Preview
