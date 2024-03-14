const e = (el) => document.querySelector(el)

const log = function () {
    console.log.apply(console, arguments)
}

let imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

function offsetPoints(points, origin) {
    const { x, y } = origin
    return points.map((p) => [p[0] + x, p[1] + y])
}

function segmentsFromPoints(points) {
    const segments = []
    for (let i = 0; i < points.length; i++) {
        if (i == points.length - 1) {
            segments.push([points[i], points[0]])
        } else {
            segments.push([points[i], points[i + 1]])
        }
    }
    return segments
}

function calcIntersection(A, B, C, D) {
    let tTop = (A[1] - C[1]) * (D[0] - C[0]) - (D[1] - C[1]) * (A[0] - C[0])
    let uTop = (B[0] - A[0]) * (A[1] - C[1]) - (A[0] - C[0]) * (B[1] - A[1])
    let bottom = (D[1] - C[1]) * (B[0] - A[0]) - (D[0] - C[0]) * (B[1] - A[1])

    if (bottom != 0) {
        let t = tTop / bottom
        let u = uTop / bottom

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            return {
                x: lerp(A[0], B[0], t),
                y: lerp(A[1], B[1], t),
                offset: t,
            }
        }
    }
    return null
}

function lerp(a, b, t) {
    return a + (b - a) * t
}

function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1]
}

function magnitude(v) {
    return Math.hypot(v[0], v[1])
}

function normalize(v) {
    return [v[0] / magnitude(v), v[1] / magnitude(v)]
}

function scale(v, scaler) {
    return [v[0] * scaler, v[1] * scaler]
}

function substract(tip, tail) {
    return [tip[0] - tail[0], tip[1] - tail[1]]
}

function add(tip, tail) {
    return [tip[0] + tail[0], tip[1] + tail[1]]
}

function setContextFont(context, style) {
    context.font = `${style.type} ${style.size}px ${style.font}`
    context.fillStyle = style.color
    context.textAlign = style.textAlign
    context.textBaseline = style.textBaseline
}
