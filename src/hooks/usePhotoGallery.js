import { useState, useEffect } from "react"
import { isPlatform } from "@ionic/react"

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera"
import { Filesystem, Directory } from "@capacitor/filesystem"
import { Preferences } from "@capacitor/preferences"
import { Capacitor } from "@capacitor/core"
export function usePhotoGallery() {
    const [photos, setPhotos] = useState([])

    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100,
        })
        const fileName = Date.now() + ".jpeg"
        const newPhotos = [
            {
                filepath: fileName,
                webviewPath: photo.webPath,
            },
            ...photos,
        ]
        setPhotos(newPhotos)
    }

    return {
        photos,
        takePhoto,
    }
}
