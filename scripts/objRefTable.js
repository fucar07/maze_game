const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.TileMovement,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Sin,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Behaviors.TileMovement.Acts.SetEnabled,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{TileMovement: 0},
	{hero: 0},
	{Solid: 0},
	{wall: 0},
	{Sine: 0},
	{enemy: 0},
	{diamonds: 0},
	{background: 0},
	{Diamonds: 0}
];

self.InstanceType = {
	hero: class extends self.ISpriteInstance {},
	wall: class extends self.ITiledBackgroundInstance {},
	enemy: class extends self.ISpriteInstance {},
	diamonds: class extends self.ISpriteInstance {},
	background: class extends self.ISpriteInstance {}
}