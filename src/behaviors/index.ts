// export support types for external use
import * as spawnShapes from './shapes';
import * as editor from './editor/Types';

export { spawnShapes };
export * from './Behaviors';

export { editor };

// export all of the individual behaviors
export * from './AccelerationMovement';
export * from './Alpha';
export * from './AnimatedTexture';
export * from './BlendMode';
export * from './BurstSpawn';
export * from './Color';
export * from './OrderedTexture';
export * from './PathMovement';
export * from './PointSpawn';
export * from './RandomTexture';
export * from './Rotation';
export * from './Scale';
export * from './ShapeSpawn';
export * from './SingleTexture';
export * from './SpeedMovement';
