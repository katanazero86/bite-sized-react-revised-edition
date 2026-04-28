import EmotionButton from "../EmotionButton.tsx";

type EmotionButtonGroupProps = {
    todayEmotion: 'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad' | 'none'
    onChange: (emotion: 'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad') => void
}

export default function EmotionButtonGroup({todayEmotion, onChange}: EmotionButtonGroupProps) {

    const handleClick = (emotion: 'veryGood' | 'good' | 'normal' | 'bad' | 'veryBad') => () => {
        onChange(emotion)
    }

    return (
        <div className="flex gap-1 justify-around">
            <EmotionButton emotion="veryGood" onClick={handleClick('veryGood')} disabled={todayEmotion === 'veryGood'}/>
            <EmotionButton emotion="good" onClick={handleClick('good')} disabled={todayEmotion === 'good'}/>
            <EmotionButton emotion="normal" onClick={handleClick('normal')} disabled={todayEmotion === 'normal'}/>
            <EmotionButton emotion="bad" onClick={handleClick('bad')} disabled={todayEmotion === 'bad'}/>
            <EmotionButton emotion="veryBad" onClick={handleClick('veryBad')} disabled={todayEmotion === 'veryBad'}/>
        </div>
    )
}