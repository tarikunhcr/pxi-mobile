import {
    IonButtons,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonGrid,
    IonHeader,
    IonIcon,
    IonImg,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react"
import { useParams } from "react-router"
import "./Page.css"
import { camera } from "ionicons/icons"
import { usePhotoGallery } from "../hooks/usePhotoGallery"

const Page: React.FC = () => {
    const { name } = useParams<{ name: string }>()

    const { photos, takePhoto } = usePhotoGallery()
    function handlePress() {
        alert("pressed")
        takePhoto()
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={handlePress}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>
                <IonGrid>
                    <IonRow>
                        {photos.map((photo, index) => (
                            <IonCol size="6" key={photo.filepath}>
                                <IonImg src={photo.webviewPath} />
                            </IonCol>
                        ))}
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Page
