wrk.GameEngine.CircleCollider = class extends wrk.GameEngine.BaseCollider {
    constructor(name, localPosition, radius) {
        super(name, localPosition, 0);

        this.radius = radius;
    }

    isTouching(collider) {
        var distSq = wrk.v.distSq(this.globalPosition, collider.globalPosition);
        return (distSq < this.radius ** 2 + collider.radius ** 2);
    }
}