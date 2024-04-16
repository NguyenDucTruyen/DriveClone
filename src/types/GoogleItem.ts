export interface DriveItem {
  kind: string
  id: string
  mimeType: string
  name: string
  parents: string[]
  children?: DriveItem[]
}

export interface DriveFile extends DriveItem {
    size?: number;
    downloadUrl?: string;
  }
  
  export interface DriveFolder extends DriveItem {
    sharedWith?: string[];
    role?: string;
  }
