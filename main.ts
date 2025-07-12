let music2 = 10001
let sound_expression = music.createSoundExpression(
WaveShape.Sine,
5000,
5000,
255,
255,
9999,
SoundExpressionEffect.Vibrato,
InterpolationCurve.Curve
)
basic.forever(function () {
    music.ringTone(music2)
    music.play(sound_expression, music.PlaybackMode.UntilDone)
})
