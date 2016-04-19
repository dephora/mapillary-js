/// <reference path="../../../typings/browser.d.ts" />

import * as THREE from "three";
import * as vd from "virtual-dom";

export interface ISpriteAtlas {
    loaded: boolean;
    getGLSprite(name: string): THREE.Sprite;
    getDOMSprite(name: string): vd.VNode;
}

export default ISpriteAtlas;